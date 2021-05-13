docker run --rm \
  -v ${PWD}/src/app/features/api/models:/local/out/model \
   openapitools/openapi-generator-cli \
   generate \
  -i https://family-tree-api-v1-staging.herokuapp.com/api-json \
  -g typescript-angular \
  -o /local/out \
  --additional-properties=fileNaming=kebab-case \
  --additional-properties=modelFileSuffix=.model \
  --additional-properties=modelSuffix=Model \
  --additional-properties=nullSafeAdditionalProps=true

