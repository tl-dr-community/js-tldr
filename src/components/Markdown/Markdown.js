import React from 'react';
import cn from 'classnames';
import MarkdownIt from 'markdown-it';
import compose from 'lodash/fp/compose';
import prism from 'prismjs';

import classes from './Markdown.module.scss';
import './syntax-highlight.scss';

const replaceLinksTarget = htmlString =>
  htmlString.replace('<a href', '<a target="_blank" href');

const processCodeLanguageHighlight = (source, language) => {
  if (!language) return;

  try {
    return prism.highlight(source, prism.languages[language], language);
  } catch (error) {
    console.log(error);
  }
};

const md = new MarkdownIt({
  highlight: processCodeLanguageHighlight,
  html: true,
});

const transformMd = compose([replaceLinksTarget, md.render.bind(md)]);

export const Markdown = ({
  component = 'div',
  className,
  source,
  ...props
}) => {
  if (!source) return null;
  const html = transformMd(source);
  const MarkdownComponent = component;

  return (
    <MarkdownComponent
      className={cn(className, classes.container)}
      dangerouslySetInnerHTML={{ __html: html }}
      {...props}
    />
  );
};
