# universal-bash

**universal-bash** is an npm package that enables the execution of Bash scripts on Windows systems, making it as easy as running them on macOS or Linux. It provides a seamless experience for developers who need to work with Bash scripts across different operating systems.

Please note that currently, **universal-bash** only supports Windows. However, future updates may include support for other platforms.

## Installation

To use **universal-bash**, simply install it as a dependency in your project by running the following command:

```shell
npm install universal-bash
```
in order to make it availabe anywhere, just install the package with "-g" flag.

```shell
npm install -g universal-bash
``` 

By default, **universal-bash** uses Git Bash, a popular bash-compatible shell for Windows, as the underlying interpreter. If the system already has bash, **universal-bash** will use it for script execution. However, this behavior can be disabled by setting the `NOT_USE_GLOBAL_BASH` environment variable to `1` during the package installation process.

```shell
NOT_USE_GLOBAL_BASH=1 npm install universal-bash
```

If bash is not available, **universal-bash** will automatically install [git-bash](https://github.com/git-for-windows/git) as a local dependency to ensure compatibility. 

For example, you can run the following command to install **universal-bash** and force the installation of a local copy of Git Bash:

## Usage

Using **universal-bash** is straightforward. Once installed, you can execute Bash scripts on your Windows machine using the `bash` command. The `bash` command is provided by Git Bash, which is utilized by **universal-bash**.

### Global executable

To run a Bash script, open your command prompt or terminal and use the following command:

```shell
bash path/to/your/script.sh
```

Replace `path/to/your/script.sh` with the actual path to your Bash script file.

### Inside package.json

If you have installed the package as a local dependency, Bash will be available inside npm scripts. You only need to add your command to the `package.json` file.

```JSON
{
  "scripts" : {
     "myScript" : "bash path/to/your/script.sh"
  }
}
```

Then you can run the script with the following command:

```shell
npm run myScript
```

This way, the script will be executable regardless of the operating system when someone clones the project in the future.

## Contribution

Contributions to **universal-bash** are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/your-username/universal-bash).

Please ensure that any contributions adhere to the project's coding standards and follow the guidelines outlined in the repository.

## License

This project is licensed under the MIT License. For more information, please refer to the [LICENSE](./LICENSE) file.

---

Thank you for choosing **universal-bash**! We hope it simplifies your experience with running Bash scripts on Windows. If you find it useful, please consider giving it a star on [GitHub](https://github.com/your-username/universal-bash). If you have any questions, feel free to reach out to us.
