import React from 'react'
import { cardProps } from './type'
import { commonCardClsPreFix as clsPreFix } from '../../../constants'

const CommonCard: React.FC<cardProps> = (props) => {
  const { width } = props
  return <div className={clsPreFix} style={{ width: width ?? 300, height: 300 }}></div>
}

export default CommonCard
