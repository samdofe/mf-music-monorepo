import { CdkTable, ICdkTableConfig } from '@inditex/cdk-table';
import { BoxTitle } from '@ui';
import { IEpisode } from '@models';
import { DATE_FORMATS, TIME_FORMATS } from '@inditex/utils';
import { useGetEpisodesListSelector } from '@store';
import { useNavigate } from 'react-router-dom';

const tableConfig: ICdkTableConfig<IEpisode> = {
  headersTemplateStyle: '1fr 80px 100px',
  headers: [
    {
      key: 'trackName',
      label: 'Title',
      customStyles: {
        display: 'flex',
        alignItems: 'center'
      },
    },
    {
      key: 'releaseDate',
      label: 'Date',
      format: DATE_FORMATS.DATE_LOCALE_STRING,
      customStyles: {
        display: 'flex',
        alignItems: 'center'
      },
    },
    {
      key: 'trackTimeMillis',
      label: 'Duration',
      customStyles: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      format: TIME_FORMATS.HH_MM_SS
    }
  ],
  data: []
}

export const EpisodesListPage = ()=>{
  const navigate = useNavigate();
  const episodesList = useGetEpisodesListSelector();
  tableConfig.data = episodesList?.episodes ?? [];

  const handleRowClick = ({ trackId }: IEpisode) =>{
    navigate(`episode/${trackId}`);
  }

  return (
    <>
      <BoxTitle title={`Episodes: ${episodesList?.resultCount}`}></BoxTitle>
      <CdkTable<IEpisode> {...tableConfig} onRowClickHandler={(episode)=>{handleRowClick(episode)}}></CdkTable>
    </>
  )
}

export default EpisodesListPage;
