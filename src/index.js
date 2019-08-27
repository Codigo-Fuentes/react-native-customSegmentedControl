import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet

} from 'react-native'

export default class CustomSegmentedControl extends React.Component {

  render() {
    const { onChange, selectedIndex, controlStyle, segmentStyle, fontStyle, selectedSegmentFontStyle, values } = this.props
    const numberOfSegments = values.length
    const width = 100 / numberOfSegments
    let textFinalStyle = { ...styles.segmentText, ...fontStyle }
    let selectedTextFinal = { ...styles.selectedText, ...selectedSegmentFontStyle }
    let controlFinalStyle = { ...styles.control, ...controlStyle }
    const segments = values.map((curr, index) => {
      let adjustedSegmentStyle = styles.segments
      if (index === 0) adjustedSegmentStyle = {...adjustedSegmentStyle, ...{borderLeftWidth: 1}}
      if (index === values.length - 1) adjustedSegmentStyle = {...adjustedSegmentStyle, ...{borderRightWidth: 1}}
      let segmentFinalStyle = { ...adjustedSegmentStyle, ...{width: `${width.toString()}%`}, ...segmentStyle }
      let invertedSegmentStyle = { ...segmentFinalStyle, ...{ backgroundColor: segmentFinalStyle.borderColor }}
      return(
        <TouchableOpacity 
          style={index === selectedIndex ? invertedSegmentStyle : segmentFinalStyle} 
          onPress={() => { onChange(index) }}
        >
          <Text style={index === selectedIndex ? selectedTextFinal : textFinalStyle}>{curr}</Text>
        </TouchableOpacity>
      )
    })

    return(
      <View style={controlFinalStyle}>
        {segments}
      </View>
    )
  } 
}

const styles = StyleSheet.create({
  control: {
    display: 'flex',
    flexDirection: 'row',
    height: 20,
    justifyContent: 'center'
  },
  segments: {
    height: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'red',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderLeftWidth: StyleSheet.hairlineWidth
  },
  segmentText: {
    color: 'red',
    fontSize: 12
  },
  selectedText: {
    color: 'white',
    fontSize: 12
  }
})