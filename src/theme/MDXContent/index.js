import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';
import './index.css'

export default function MDXContentWrapper(props) {
  return (
    <>
      <MDXContent {...props} />
      <GiscusComponent />
    </>
  );
}

const GiscusComponent = () => {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      className="giscus"
      style={{ maxHeight: "200px", overflow: "scroll" }}
      repo="kater-ai/kater-docs"
      repoId="R_kgDOKzvQEQ"
      category="General"
      categoryId="DIC_kwDOKzvQEc4CfA6i"  // E.g. id of "General"
      mapping="url"                        // Important! To map comments to URL
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}
