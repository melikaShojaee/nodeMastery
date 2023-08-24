# Managing Node.js Versions with nvm (Node Version Manager)

## Table of Contents

- [Introduction to nvm](#introduction-to-nvm)
- [Installation](#installation)
- [Usage](#usage)
  - [Installing Node.js Versions](#installing-nodejs-versions)
  - [Switching Between Node.js Versions](#switching-between-nodejs-versions)
  - [Listing Installed Node.js Versions](#listing-installed-nodejs-versions)
  - [Setting Default Node.js Version](#setting-default-nodejs-version)
  - [Uninstalling Node.js Versions](#uninstalling-nodejs-versions)
- [Advanced Usage](#advanced-usage)
  - [Using .nvmrc Files](#using-nvmrc-files)
  - [Aliases](#aliases)
- [Updating nvm](#updating-nvm)
- [Troubleshooting](#troubleshooting)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction to nvm

nvm (Node Version Manager) is a command-line tool that allows you to manage multiple versions of Node.js on your system. It simplifies the process of installing, switching between, and managing different Node.js versions, making it easier to work on projects that require specific versions of Node.js.

## Installation

To install nvm, follow these steps:

1. Open your terminal.
2. Run the following command to download and install nvm:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

   Alternatively, you can use wget:

   ```bash
   wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

3. Close and reopen your terminal, or run the following command to apply the changes:

   ```bash
   source ~/.bashrc
   ```

   If you're using a different shell, replace `~/.bashrc` with the appropriate configuration file.

## Usage

### Installing Node.js Versions

To install a specific version of Node.js, use the following command:

```bash
nvm install <version>
```

For example, to install Node.js version 14.17.5, run:

```bash
nvm install 14.17.5
```

### Switching Between Node.js Versions

You can switch between installed Node.js versions using the `use` command:

```bash
nvm use <version>
```

For instance, to use Node.js version 12.22.6, execute:

```bash
nvm use 12.22.6
```

### Listing Installed Node.js Versions

To list all the Node.js versions installed on your system, use:

```bash
nvm ls
```

This command will display a list of installed versions along with an indicator to show which version is currently in use.

### Setting Default Node.js Version

If you want to set a default Node.js version to be used whenever you open a new terminal, run:

```bash
nvm alias default <version>
```

For example:

```bash
nvm alias default 14.17.5
```

### Uninstalling Node.js Versions

To uninstall a specific Node.js version, run:

```bash
nvm uninstall <version>
```

Replace `<version>` with the version number you want to uninstall.

## Advanced Usage

### Using .nvmrc Files

You can specify the required Node.js version for a project using a `.nvmrc` file. Create a file named `.nvmrc` in your project's root directory and write the desired version number inside it. For example:

```plaintext
14.17.5
```

Now, whenever you navigate to your project's directory, nvm will automatically switch to the specified version if it's not already in use.

### Aliases

nvm allows you to create aliases for Node.js versions, making it easier to reference them. For instance:

```bash
nvm alias mynode 14.17.5
```

Now you can use `mynode` instead of the version number in commands:

```bash
nvm use mynode
```

## Updating nvm

To update nvm to the latest version, use:

```bash
nvm install-latest-npm
```

## Troubleshooting

- If you encounter permission issues during installation or usage, ensure that you have the necessary permissions to modify the installation directories and configuration files.
- Make sure to restart your terminal or run `source` commands after installation or any changes to the nvm settings.

## Conclusion

nvm is a powerful tool for managing multiple Node.js versions on your system. It simplifies the process of installing, switching, and managing versions, making it convenient to work on different projects with varying Node.js requirements.

## References

- [nvm GitHub Repository](https://github.com/nvm-sh/nvm)
- [nvm Documentation](https://github.com/nvm-sh/nvm#usage)
