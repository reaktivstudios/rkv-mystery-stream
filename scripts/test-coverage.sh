rm -rf './coverage' && \
cross-env \
'SKIP_PREFLIGHT_CHECK=true' \
react-scripts test \
--verbose \
--watchAll=false \
--coverage && \
open './coverage/lcov-report/index.html' \
