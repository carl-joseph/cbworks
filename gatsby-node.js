// const path = require("path")

// exports.createPages = async ({ graphql, actions: { createPage } }) => {
//   const { data } = await graphql(`
//     query TemplateQuery {
//     }
//   `)

// const { destructuredData } = data

// destructuredData.nodes.forEach(({ slug }) => {
//   return createPage({
//     path: `/path/${slug}`,
//     component: path.resolve("./src/templates/template.js"),
//     context: { slug },
//   })
// })
// }
