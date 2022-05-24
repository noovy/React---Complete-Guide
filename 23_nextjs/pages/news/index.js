import { Fragment } from "react";
import Link from 'next/link';

const NewsPage = () => {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
          <li><Link href="news/lol">Something great</Link></li>
          <li>yes yrsy yses</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
