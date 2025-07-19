import { DocSearch } from '@docsearch/react';
import slateConfig from '~@/slate.config';
import { useLocales } from './useLocales';
import '@docsearch/css';
import './index.css';

interface SearchProps {
  className?: string;
}

const Search = ({ className }: SearchProps) => {
  const algoliaLocalesConfig = useLocales(slateConfig.lang);

  return (
    slateConfig.algolia && (
      <div className={className}>
        <DocSearch
          appId={slateConfig.algolia.appId}
          indexName={slateConfig.algolia.indexName}
          apiKey={slateConfig.algolia.apiKey}
          placeholder={algoliaLocalesConfig.placeholder}
          translations={algoliaLocalesConfig.translations}
        />
      </div>
    )
  );
};

export default Search;
