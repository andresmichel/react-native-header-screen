import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default class HeaderScreen extends React.Component {
  render() {
    const { color, borderColor, backgroundColor } = this.props
    return (
      <View style={styles.container}>
        {
          this.props.header &&
          <View style={[
            styles.headerContainer,
            {
              backgroundColor,
              borderBottomColor: borderColor,
            }
          ]}>
            <View style={{ flexDirection: 'row' }}>{this.props.LeftComponent}</View>
            {
              (this.props.title || this.props.RightComponent) &&
              <View style={styles.infoContainer}>
                {this.props.title && <Text style={[styles.title, { color }]}>{this.props.title}</Text>}
                <View style={{ marginLeft: 'auto' }}>
                  {this.props.RightComponent}
                </View>
              </View>
            }
            <View style={{ marginHorizontal: 20 }}>
              {this.props.SearchComponent}
              {this.props.BottomComponent}
            </View>
          </View>
        }
        <View style={[styles.childrenContainer, { backgroundColor }]}>
          {this.props.children}
        </View>
      </View>
    )
  }
}

HeaderScreen.propTypes = {
  title: PropTypes.string,
  TopComponent: PropTypes.element,
  BottomComponent: PropTypes.element,
  LeftComponent: PropTypes.element,
  RightComponent: PropTypes.element,
  SearchComponent: PropTypes.element,
  header: PropTypes.bool,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
}

HeaderScreen.defaultProps = {
  header: true,
  color: '#000',
  borderColor: '#d3d3d3',
  backgroundColor: '#fff',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: getStatusBarHeight(true),
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  infoContainer: {
    marginTop: 10,
    marginBottom: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  title: {
    marginLeft: 20,
    fontSize: 34,
    fontWeight: 'bold',
  },
  childrenContainer: {
    flex: 1,
  },
})
