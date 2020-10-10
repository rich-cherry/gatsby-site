module.exports.onCreateNode = ( {node, actions} ) => {
  const { createNodeField } = actions

  console.log(JSON.stringify(node, undefine, 4))
}
