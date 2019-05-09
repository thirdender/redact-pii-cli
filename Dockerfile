FROM node

RUN set -x \
  && git clone https://github.com/thirdender/redact-pii-cli.git /home/node/app \
  && cd /home/node/app \
  && npm install

WORKDIR /home/node/app
ENTRYPOINT ["/usr/bin/env", "node", "index.js"]
