import { useEffect } from 'react';
import { useCodeGroups } from 'remark-block-containers/useCodeGroups';

const CodeGroupEvent = () => {
  useEffect(() => {
    useCodeGroups();
  }, [useCodeGroups]);

  return <></>;
};

export default CodeGroupEvent;
