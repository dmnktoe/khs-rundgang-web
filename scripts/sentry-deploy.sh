// sentry-deploy.sh
#!/bin/sh
export SENTRY_ORG=dmnktoe
export SENTRY_PROJECT=radio-rasclat-web
# Version from git
REVISION=$(git rev-parse --short HEAD)
sentry-cli releases new -p $SENTRY_PROJECT "$SENTRY_PROJECT@$REVISION"
sentry-cli releases set-commits "$SENTRY_PROJECT@$REVISION" --auto
# Upload source maps
sentry-cli releases files "$SENTRY_PROJECT@$REVISION" upload-sourcemaps ./../dist --rewrite
# Finalize
sentry-cli releases finalize "$SENTRY_PROJECT@$REVISION"
