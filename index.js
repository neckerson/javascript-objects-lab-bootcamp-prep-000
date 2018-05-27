var recipes = {
  cookies: 'chocolate chip'
};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, { key: value} );
}