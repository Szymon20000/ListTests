import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SingleDataType } from "./DataType";

type Props = {
  data: SingleDataType;
}

function Base({data}: Props) {
  return (
    <View style={{flexDirection: (data.type === 'left'? 'row' : 'row-reverse')}}>
      <View style={styles.container}>
        <Text style={styles.text} > {data.author} </Text>
        <Text style={styles.text} > {data.msg} </Text>
        <View style={[{height: data.height}, styles.box]} /> 
      </View>
    </View>
  );
}

export function Left({data}: Props) {
  return (<Base data={data} />)
}

export function Right({data}: Props) {
  return (<Base data={data} />)
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'green',
    padding: 3,
  },
  container: {
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'column',
  },
  text: {
    margin: 5,
  },
  box: {
    width: 500,
    backgroundColor: 'green',
    margin: 5,
  }
});

