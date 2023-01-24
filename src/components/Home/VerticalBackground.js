import React from 'react'
import { motion } from 'framer-motion'

const VerticalBackgrounds = () => {
  return (
    <div>
      <motion.div
        initial={{ background: 'red' }}
        animate={{ background: 'blue' }}
        transition={{ duration: 2 }}
        style={{ width: '25%', height: '100vh' }}
      />
      <motion.div
        initial={{ background: 'green' }}
        animate={{ background: 'purple' }}
        transition={{ duration: 2 }}
        style={{ width: '25%', height: '100vh' }}
      />
      <motion.div
        initial={{ background: 'orange' }}
        animate={{ background: 'pink' }}
        transition={{ duration: 2 }}
        style={{ width: '25%', height: '100vh' }}
      />
      <motion.div
        initial={{ background: 'black' }}
        animate={{ background: 'yellow' }}
        transition={{ duration: 2 }}
        style={{ width: '25%', height: '100vh' }}
      />
    </div>
  )
}

export default VerticalBackgrounds
