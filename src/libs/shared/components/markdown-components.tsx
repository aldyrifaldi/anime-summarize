import { AnchorHTMLAttributes, HtmlHTMLAttributes, PropsWithChildren, PropsWithRef } from "react";

export const markdownComponents = {
  h1: ({ children }: PropsWithChildren) => <h1 className="text-xl font-bold">{children}</h1>,
  h2: ({ children }: PropsWithChildren) => <h2 className="text-lg font-bold">{children}</h2>,
  h3: ({ children }: PropsWithChildren) => <h3 className="text-base font-bold">{children}</h3>,
  h4: ({ children }: PropsWithChildren) => <h4 className="text-sm font-bold">{children}</h4>,
  h5: ({ children }: PropsWithChildren) => <h5 className="text-xs font-bold">{children}</h5>,
  h6: ({ children }: PropsWithChildren) => <h6 className="text-xs font-bold">{children}</h6>,
  p: ({ children }: PropsWithChildren) => <p className="text-sm">{children}</p>,
  a: ({ children, href }: PropsWithRef<AnchorHTMLAttributes<HTMLAnchorElement>>) => (
    <a className="text-blue-500" href={href as string}>
      {children}
    </a>
  ),
  ul: ({ children }: PropsWithChildren) => <ul className="list-disc list-inside">{children}</ul>,
  ol: ({ children }: PropsWithChildren) => <ol className="list-decimal list-inside">{children}</ol>,
  li: ({ children }: PropsWithChildren) => <li className="text-sm">{children}</li>,
  blockquote: ({ children }: PropsWithChildren) => <blockquote className="text-sm">{children}</blockquote>,
  code: ({ children }: PropsWithChildren) => <code className="text-sm">{children}</code>,
  strong: ({ children }: PropsWithChildren) => <strong className="font-bold">{children}</strong>,
  em: ({ children }: PropsWithChildren) => <em className="italic">{children}</em>,
  del: ({ children }: PropsWithChildren) => <del>{children}</del>,
}
