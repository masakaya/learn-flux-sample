FROM node:22

# Install git and other dependencies
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install git bash-completion \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /workspace

# Set up command history
RUN echo "export HISTFILE=/workspace/.bash_history" >> /home/node/.bashrc \
    && echo "export PROMPT_COMMAND='history -a'" >> /home/node/.bashrc \
    && mkdir -p /home/node/.vscode-server/extensions \
    && chown -R node:node /home/node

# Switch to non-root user
USER node