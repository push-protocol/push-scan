import React, { useState } from 'react';
import { Box, Text, Table, Pagination } from '../../blocks';
import { useLiveBlocks } from '../../hooks/useBlocks';
import { PerPageItems } from '../../utils/constants'
import { useRouter } from 'next/router'
import moment from 'moment';
import { getValidatorNode } from '../../utils/helpers'
import { useTheme } from 'styled-components';

const Blocks = () => {
  const router = useRouter()
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isError } = useLiveBlocks({ page });

  const theme = useTheme();
  const isDarkMode = theme.scheme === 'dark';

  const columns = [
    {
      title: 'BLOCK HASH',
      dataIndex: 'blockHash',
      render: (text) => <Text variant='bs-regular' color="text-primary" onClick={() => router.push(`/blocks/${text}`)}>{text}</Text>,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '35%'
    },
    {
      title: 'VALIDATOR',
      dataIndex: 'validator',
      render: (text) => <Text variant='bs-regular' color="text-primary">{text}</Text>,
      cellAlignment: 'flex-start',
      headerAlignment: 'flex-start',
      width: '35%'
    },
    {
      title: 'TXN',
      dataIndex: 'totalNumberOfTxns',
      render: (text) => <Text variant='bs-regular' color="text-primary">{text}</Text>,
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '10%'
    },
    {
      title: 'SIZE (IN BYTES)',
      dataIndex: 'blockSize',
      render: (text) => <Text variant='bs-regular' color="text-primary">{text}</Text>,
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '15%'
    },
    {
      title: 'AGE',
      dataIndex: 'ts',
      render: (text) => <Text variant='bs-regular' color="text-tertiary">{moment(text * 1000).fromNow()}</Text>,
      cellAlignment: 'center',
      headerAlignment: 'center',
      width: '5%'
    },
  ];

  const dataSource = data?.blocks?.map(block => ({
    id: block.blockHash,
    blockHash: block.blockHash,
    validator: getValidatorNode(block.blockDataAsJson?.signersList), // Define this function or update data mapping accordingly
    totalNumberOfTxns: block.totalNumberOfTxns,
    blockSize: block.blockSize,
    ts: block.ts
  })) || [];

  
  return (
    <Box
        display="flex"
        flexDirection="column"
        gap="spacing-xs"
    >
        <Table columns={columns} dataSource={dataSource} backgroundColor={isDarkMode ? 'surface-secondary' : 'surface-primary'} />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Pagination
            pageSize={PerPageItems}
            current={page}
            total={data?.totalPages * PerPageItems}
            onChange={(page) => setPage(page)}
          />
        </Box>
    </Box>
  );
};

export default Blocks;