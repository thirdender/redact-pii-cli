# Simple CLI wrapper for `redact-pii`

Google's [redact-pii](https://github.com/solvvy/redact-pii) library searches for and redacts PII in a body of text, but only works inside of a Node.js program. This simple CLI wrapper aims to make it possible to use in script applications.


## Example usage

To see the output of `redact-pii` directly, pipe your input directly to the tool:

    cat sample.txt | npx github:thirdender/redact-pii-cli

If you only want to see if the output contains PII, pass a replacement string to the tool and grep the output:

    REPLACEMENT=`head /dev/urandom | mkpasswd -s`; cat sample.txt | npx github:thirdender/redact-pii-cli --replacement $REPLACEMENT | grep $REPLACEMENT | wc -l

To run inside Docker, first build an image from the Dockerfile, then you can pipe input through `docker run -i`:

    docker build -t redact-pii-cli .
    cat sample.txt | docker run -i redact-pii-cli node /home/node/app/index.js -
