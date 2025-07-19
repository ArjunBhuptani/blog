#!/bin/bash
# slate-blog github
SLATE_BLOG_REPO="https://github.com/SlateDesign/slate-blog.git"

if ! git remote | grep -q "^slate_blog$"; then
    git remote add slate_blog "$SLATE_BLOG_REPO" || { echo "Failed to add Slate Blog remote repository"; exit 1; }

    echo "Successfully added Slate Blog remote repository"
fi

git fetch --no-tags slate_blog || { echo "Failed to fetch code from Slate Blog"; exit 1; }

git merge slate_blog/main --allow-unrelated-histories
if [ $? -ne 0 ]; then
    echo "Merge conflicts detected. Please resolve conflicts manually and run the following commands:"
    echo "1. After resolving conflicts, use 'git add <file>' to mark conflicts as resolved"
    echo "2. Run 'git commit' to complete the merge"
    exit 1
fi

git remote remove slate_blog || { echo "Failed to remove Slate Blog remote repository"; exit 1; }

echo "Merge completed"
