module.exports = function(options) {
  return {
    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("dynamicImport");
    },
    visitor: {
      Import: function(path, state) {
        const dynamicImportArgsNode = path.parentPath.node.arguments;
        const renderDynamicImport = state.opts.renderDynamicImport;
        const templateParts = renderDynamicImport(dynamicImportArgsNode[0].value);
        if (templateParts && templateParts.left && templateParts.right) {
          const createImportNode = options.template(templateParts.left + "IMPORT_ARGS" + templateParts.right);
          path.parentPath.replaceWith(createImportNode({ IMPORT_ARGS: dynamicImportArgsNode }));
        }
      }
    }
  };
};
