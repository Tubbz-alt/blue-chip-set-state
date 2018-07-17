const buildRelationships = resource => {
  return Object.entries(resource).reduce((newObject, [key, value]) => {
    if (value && Array.isArray(value)) {
      if (!newObject[key]) {
        newObject[key] = {data: []};
      }

      newObject[key].data = value.map(id => ({type: key, id}));
    }
    return newObject;
  }, {});
};

const updateResources = (mutator, resourceType, resourcesById) => {
  Object.entries(resourcesById).forEach(([id, resource]) => {
    mutator(state => {
      if (!state.resources[resourceType]) {
        state.resources[resourceType] = {};
      }

      state.resources[resourceType][id] = resource;
      return state;
    });
  });
};

const updateResource = (
  mutator,
  {id, type, attributes, links, relationships}
) => {
  mutator(state => {
    if (!(type in state.resources)) {
      state.resources[type] = {};
    }

    state.resources[type][id] = {
      type,
      id,
      attributes,
      links,
      relationships: relationships || buildRelationships(type, attributes)
    };
    return state;
  });
};

const removeResources = (mutator, resources) => {
  console.log("Not Implemented Yet");
};

const removeResource = (mutator, {id, type}) => {
  console.log("Not Implemented Yet");
};

const clearResources = (mutator, resourceTypes) => {
  console.log("Not Implemented Yet");
};

var actions = /*#__PURE__*/Object.freeze({
  updateResources: updateResources,
  updateResource: updateResource,
  removeResources: removeResources,
  removeResource: removeResource,
  clearResources: clearResources
});

var index = {actions};

export default index;
