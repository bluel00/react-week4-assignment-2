import React from 'react';

import List from './List';

export default function ListContainer() {
  const restaurants = [];
  // 상태 변화에 대해 추가할 예정.

  return (
    <List restaurants={restaurants} />
  );
}
