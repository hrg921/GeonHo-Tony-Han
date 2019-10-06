#!/bin/bash

AWS_S3_BUCKET_NAME=wlog.geonho.com
AWS_CLOUDFRONT_DISTRIBUTION_ID=E7ZN9O3C7ILHA
BUILD_ARTIFACT_DIRECTORY=./build
PROFILE=hrg921@korea.ac.kr

BASEDIR=$(dirname $0)

cd $BASEDIR
echo "[deploy info] execute directory: $BASEDIR"

echo "[deploy info] build artifact directory: $BUILD_ARTIFACT_DIRECTORY from: $BASEDIR"
echo "[deploy info] build artifact copy start!"
aws s3 sync $BUILD_ARTIFACT_DIRECTORY s3://$AWS_S3_BUCKET_NAME --profile $PROFILE --delete
echo "[deploy info] build artifact copy ended!"

echo "[deploy info] cloudfront invalidate start!"
aws cloudfront create-invalidation --distribution-id $AWS_CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
echo "[deploy info] cloudfront invalidate ended!"
