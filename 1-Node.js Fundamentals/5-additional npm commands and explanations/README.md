
# npm Commands and Explanations

This README provides explanations for some useful npm commands and related concepts.

## `npm ls --all`

Running `npm ls --all` displays a complete dependency tree for your project, including sub-dependencies. It provides a detailed overview of all packages and their dependencies in your project.

```bash
npm ls --all
```

## `npm ls --depth=2`

Using `npm ls --depth=2` allows you to limit the depth of the displayed dependency tree. In this example, it shows main dependencies and their immediate sub-dependencies up to a depth of 2.

```bash
npm ls --depth=2
```

## Understanding "Deduped"

In the context of an `npm ls` or `npm list` output, the term "deduped" means that a package dependency has been deduplicated. Deduplication is a process that npm performs to optimize the dependency tree and avoid having multiple copies of the same package.

When you see a line like:

```
├── safe-buffer@5.2.1 deduped
```

It means that the `safe-buffer` package at version 5.2.1 is a dependency of your project, but it has also been included as a dependency of another package in your project. npm has detected this duplication and has taken steps to ensure that only a single instance of `safe-buffer` is included in your project's dependency tree.

Deduplication helps reduce the size of the `node_modules` directory and ensures that there are no conflicts or compatibility issues when multiple packages rely on the same dependency but at different versions. npm effectively manages these situations by including only one copy of the shared package and ensuring that all packages that depend on it reference the same instance.

In summary, when you see "deduped" in the output, it means that npm has detected and handled the situation where a package is a dependency of multiple packages to prevent unnecessary duplication of that package in your project. This is a helpful optimization to keep your project's dependencies efficient and manageable.

## Peer Dependencies

Peer dependencies are packages that your own package (the one you are developing) expects its consumers (other packages or projects that use your package as a dependency) to have. Unlike regular dependencies, which are automatically installed when your package is installed, peer dependencies are not automatically installed. Instead, npm will issue a warning to the user when they try to install your package, indicating that they need to ensure the peer dependencies are installed in their project.

Here's how you define peer dependencies in your `package.json`:

```json
{
  "name": "your-package",
  "version": "1.0.0",
  "peerDependencies": {
    "some-dependency": "^2.0.0",
    "another-dependency": ">=1.0.0 <3.0.0"
  }
}
```

In the example above:

- `"some-dependency"` is specified with a caret (`^`) symbol, indicating that your package expects version 2.0.0 or any compatible version with a higher minor or patch version (e.g., 2.1.0 or 2.0.1).

- `"another-dependency"` is specified with a range, indicating that your package expects any version greater than or equal to 1.0.0 but less than 3.0.0.

When a user tries to install your package using `npm install your-package`, npm will check if the specified peer dependencies are already installed in their project. If they are not, npm will issue a warning similar to:

```
npm WARN peerDependencies The package your-package requires a peer of some-dependency@^2.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN peerDependencies The package your-package requires a peer of another-dependency@>=1.0.0 <3.0.0 but none is installed. You must install peer dependencies yourself.
```

The user is then responsible for installing the specified peer dependencies manually in their project. This approach allows packages to avoid having multiple conflicting versions of a dependency in the same project and promotes compatibility between packages.

Peer dependencies are commonly used in libraries or packages that are meant to be used as dependencies in other projects, ensuring that users of the package are aware of the specific versions of dependencies that are compatible with it.

## npm Vulnerability Severity Levels

npm uses a severity system to classify security vulnerabilities and issues found in packages. These severity levels help developers understand the potential impact of a vulnerability and the urgency with which it should be addressed. The severity levels used in npm are as follows, along with their meanings:

1. **Info (Informational):**
   - Meaning: Issues classified as "Info" are the least severe. They often include non-security-related information or notices about the package or dependency.
   - Action: These issues generally don't require immediate attention but should be reviewed for informational purposes.

2. **Low:**
   - Meaning: Low-severity issues indicate that a

 vulnerability or problem exists, but it has minimal or no practical impact on the security or functionality of the package.
   - Action: While these issues are relatively low risk, it's advisable to address them when convenient, especially if they relate to best practices or code quality.

3. **Moderate:**
   - Meaning: Moderate-severity issues represent vulnerabilities or concerns that could potentially lead to security or functional issues in certain scenarios.
   - Action: It's recommended to address moderate-severity issues in a timely manner to mitigate any potential risks.

4. **High:**
   - Meaning: High-severity issues are more critical. They often indicate vulnerabilities that could be exploited to compromise the security of your project or data.
   - Action: High-severity issues should be addressed urgently. You should update or patch affected packages as soon as possible to reduce security risks.

5. **Critical:**
   - Meaning: Critical-severity issues are the most severe. They represent vulnerabilities that pose a significant and immediate threat to the security of your project.
   - Action: Critical-severity issues demand immediate attention and should be addressed and remediated without delay. Failure to do so can result in severe security breaches.

When using npm to manage your project's dependencies, it's important to regularly run `npm audit` to check for security vulnerabilities and issues in your project's dependencies. The severity levels provided by npm help you prioritize and address these issues based on their potential impact on your project's security and functionality. Always follow best practices for security and stay up to date with security updates and patches for your dependencies to protect your project from vulnerabilities.
