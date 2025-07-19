---
title: Building a toast component
description: Earlier this year, I built a Toast library for React called Sonner. In this article, I'll show you some of the lessons I've learned and mistakes I made while building it.
tags:
  - Dev
  - Web
  - Animation
pubDate: 2023-09-05
---
Earlier this year, I built a Toast library for React called [Sonner](https://sonner.emilkowal.ski/). In this article, I'll show you some of the lessons I've learned and mistakes I made while building it.

## Animations

Initially, I used CSS keyframes for enter and exit animations, but they aren't interruptible. A CSS transition can be interrupted and smoothly transition to a new value, even before the first transition has finished. You can see the difference below.

To transition the toast when it enters the screen, essentially to mimic the enter animation, we used `useEffect` to set the mounted state to true after the first render. This way, the toast is rendered with transform: `translateY(100%)` and then transitions to `transform: translateY(0)`. The style is based on a data attribute.

```tsx
React.useEffect(() => {  setMounted(true);}, []); 

//... 

<li data-mounted={mounted}>
```

## Stacking toasts

To create the stacking effect, we multiply the gap between toasts by the index of the toast to get the y position. It's worth noting that every toast has `position: absolute` to make stacking easier. We also scale them down by 0.05 * index to create the illusion of depth. Here's the simplified CSS for it:

```tsx
[data-sonner-toast][data-expanded="false"][data-front="false"] {  
  --scale: var(--toasts-before) * 0.05 + 1;
  --y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale))
    );
}
```

This works great until you have toasts with different heights, they won't stick out evenly. We fix it by simply making all the toasts the height of the toast in front when in stacked mode. Here's how the toasts would look with different heights:

Add toast


## Swiping

The toasts can be swiped down to dismiss. That's just a simple event listener on the toast which updates a variable responsible for the `translateY` value.

```tsx
// This is a simplified version of the code
const onMove = (event) => {
  const yPosition = event.clientY - pointerStartRef.current.y;

  toastRef.current?.style.setProperty("--swipe-amount", `${yPosition}px`);
};
```

The swipe is momentum-based, meaning you don't have to swipe until a specific threshold is met to remove the toast. If the swipe movement is fast enough, the toast will still be dismissed because the velocity is high enough.

```tsx
const timeTaken = new Date().getTime() - dragStartTime.current.getTime();
const velocity = Math.abs(swipeAmount) / timeTaken; 

// Remove if the threshold is met or velocity is high enough
if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > 0.11) {
  deleteToast();
}
```



## Spatial consistency

Initially, the toast was entering from the bottom, and you could swipe it to the right, as shown in [this tweet](https://twitter.com/emilkowalski_/status/1503372086038962178). However, that didn't feel natural since the toast didn't follow a symmetric path. If something enters from the bottom, it should also exit in the same direction. I learned this principle from the [Designing Fluid Interfaces](https://developer.apple.com/videos/play/wwdc2018/803/) talk from Apple. It's amazing and I highly recommend watching it.  
  
If you are interested in this type of stuff, then you might enjoy my course on animations, where I cover this and much more — [animations.dev](https://animations.dev/).



## Expanding toasts


We calculate the expanded position of each toast by adding the heights of all preceding toasts and the gap between them. This value will become the new `translateY` when the user hovers over the toast area.

```tsx
const toastsHeightBefore = React.useMemo(() => {
  return heights.reduce((prev, curr, reducerIndex) => {
    // Calculate offset up until current toast
    if (reducerIndex >= heightIndex) {
      return prev;
      }
                      
      return prev + curr.height;
    }, 0);
  }, [heights, heightIndex]); 

// ... 

const offset = React.useMemo(
  () => heightIndex * GAP + toastsHeightBefore,
  [heightIndex, toastsHeightBefore]
);
```

## State management

To avoid using [context](https://react.dev/reference/react/createContext), we manage the state via the [Observer Pattern](https://javascriptpatterns.vercel.app/patterns/design-patterns/observer-pattern). We subscribe to the observable object in the `<Toaster />` component. Whenever the `toast()` function is called, the `<Toaster />` component (as the subscriber) is notified and updates its state. We can then render all the toasts using `Array.map()`.

```tsx
function Toaster() {
  React.useEffect(() => {
    return ToastState.subscribe((toast) => {
      setToasts((toasts) => [...toasts, toast]);
    });
  }, []);
            
  // ...
  
  return (
    <ol>
      {toasts.map((toast, index) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </ol>
  );
}
```

To create a new toast, we simply import `toast` and call it. There's no need for hooks or context, just a straightforward function call.

```tsx
import { toast } from "sonner"; 

// ... 

toast("My toast");
```


## Hover state

The hover state depends on whether we are hovering over one of the toasts. However, there are also gaps between the toasts. To address this, we add an `:after` pseudo-element to fill in these gaps, ensuring a consistent hover state. You will see these filled gaps depicted below.

Add toast

## Pointer capture

Once we start dragging, we set the toast to capture all future pointer events. This ensures that even if the mouse or our thumb moves outside the toast while dragging, the toast remains the target of the pointer events. As a result, dragging remains possible, even if we are outside of the toast, leading to a better user experience.

```tsx
function onPointerDown(event) {
  event.target.setPointerCapture(event.pointerId);
}
```


:::info
From [Building a toast component](https://emilkowal.ski/ui/building-a-toast-component)
:::