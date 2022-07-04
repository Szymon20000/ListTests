import React, { Node, Component, useState, useCallback, useMemo } from 'react';
import { View, LayoutChangeEvent } from 'react-native';
import { SingleDataType } from './DataType';
import { RecyclerListView, LayoutProvider, DataProvider } from "recyclerlistview";
import { Right, Left } from './Components';

type Props = {
  dim: { height: number, width: number },
  data: Array<SingleDataType>,
};

type State = {
  dataProvider: DataProvider;
}

class List extends Component<Props, State> {
  _layoutProvider: LayoutProvider;
  initialized = false;
  dataProvider: DataProvider = new DataProvider((a, b) => {return false});
  constructor(args) {
    super(args);
  }


  _renderRow(type, data) {
    if (type === 'left') {
      return (<Left data={data} />);
    } else {
      return (<Right data={data} />);
    }
  }

  render() {
    const width = this.props.dim.width;
    if (this.initialized == false) {
      this.initialized = true;
      this.dataProvider = new DataProvider((r1, r2) => {
        return r1 !== r2
      }).cloneWithRows(this.props.data);

      this._layoutProvider = new LayoutProvider((i) => {
        return this.dataProvider.getDataForIndex(i).type;
      }, (type, dim) => {
        dim.height = 50;
        dim.width = width;
      });
    }
    return <View style={{ flex: 1, borderWidth: 1, borderColor: 'yellow' }}>
      <RecyclerListView rowRenderer={this._renderRow.bind(this)} dataProvider={this.dataProvider}
        layoutProvider={this._layoutProvider} />
    </View>
  }
}

export function RecycleViewerExample({ data }: { data: Array<SingleDataType> }): Node {
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
    return dim.height != -1 && dim.width != -1;
  }, [dim]);

  return (
    <View style={{ flex: 1 }} onLayout={onLayout}>
      {haveLayout && <List dim={dim} data={data} />}
    </View>
  );
}