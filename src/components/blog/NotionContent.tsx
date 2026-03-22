'use client';

import { NotionRenderer } from 'react-notion-x';
import type { ExtendedRecordMap } from 'notion-types';
import dynamic from 'next/dynamic';

import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

const Collection = () => null;

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
);

type Props = {
  recordMap: ExtendedRecordMap;
};

export default function NotionContent({ recordMap }: Props) {
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={false}
      darkMode={true}
      disableHeader={true}
      components={{ Collection, Code }}
    />
  );
}