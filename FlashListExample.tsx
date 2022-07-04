import React, { Node, Component, useState, useCallback, useMemo } from 'react';
import { View, LayoutChangeEvent } from 'react-native';
import { SingleDataType } from './DataType';
import { Right, Left } from './Components';
import { FlashList } from "@shopify/flash-list";

type Props = {
  dim: { height: number, width: number },
  data: Array<SingleDataType>,
};

function List({dim, data}: Props) {
  return (
    <View style={{flex: 1}}>
      <FlashList
      data={data}
      renderItem={({ item }) => {
        const type = item.type;
        if (type === 'left') {
          return (<Left data={item} />);
        } else {
          return (<Right data={item} />);
        }
      }}
      estimatedItemSize={50}
      estimatedListSize={dim}
    />
    </View>
  )
}

export function FlashListExample({ data }: { data: Array<SingleDataType> }): Node {
  const [dim, setDim] = useState({ height: -1, width: -1 });
  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const height = e.nativeEvent.layout.height;
    const width = e.nativeEvent.layout.width;
    if (height != dim.height || width != dim.width) {
      setDim({
        height,
        width,
      });
    }
  }, [setDim])

  const haveLayout = useMemo(() => {
    return dim.height !== -1 && dim.width !== -1;
  }, [dim]);

  return (
    <View style={{ flex: 1 }} onLayout={onLayout}>
      {haveLayout && <List dim={dim} data={data} />}
    </View>
  );
}