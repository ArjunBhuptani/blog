/*
 * @Author: kim
 * @Description: 目录
 */
import type { MarkdownHeading } from 'astro';
import classNames from 'classnames';

interface TocProps {
  className?: string;
  listClassName?: string;
  dataSource?: MarkdownHeading[];
}

function Toc(props: TocProps) {
  const { dataSource = [], className, listClassName } = props;
  const listClasses = classNames('text-slate8', listClassName);

  return (
    !!dataSource.length && (
      <div className={className}>
        <nav className="h-full w-full overflow-scroll">
          <ul className={listClasses}>
            {dataSource
              .filter((item) => item.depth > 1)
              .map((item) => {
                return (
                  <li key={item.slug}>
                    <a
                      className="inline-block cursor-pointer py-0.5 transition-colors hover:text-slate12"
                      style={{ marginLeft: `${(item.depth - 2) * 8}px` }}
                      href={`#${item.slug}`}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>
    )
  );
}

export default Toc;
