cross-env \
'SKIP_PREFLIGHT_CHECK=true' \
react-scripts build && \
cp -r './src/fixtures' './build/fixtures' \
