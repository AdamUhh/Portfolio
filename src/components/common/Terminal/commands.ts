type CommandFunction = (command: string) => string | string[];

interface CommandDefinition {
  description: string;
  execute: CommandFunction;
}

export const commands: Record<string, CommandDefinition> = {
  help: {
    description:
      "List of commands:\n- help\n- echo [message]\n- clear\n- date\n- greet [name]",
    execute: () => "",
  },
  echo: {
    description: "Prints the specified message",
    execute: (command) => {
      const [, message] = command.split(" ");
      return message ? `Echo: ${message}` : "Usage: echo [message]";
    },
  },
  clear: {
    description: "Clears the terminal output",
    execute: () => [],
  },
  date: {
    description: "Displays the current date and time",
    execute: () => new Date().toLocaleString(),
  },
  greet: {
    description: "Greets the specified person",
    execute: (command) => {
      const [, name] = command.split(" ");
      return name ? `Hello, ${name}!` : "Usage: greet [name]";
    },
  },
  default: {
    description: "Unknown command",
    execute: (command) => `Unknown command: ${command}`,
  },
};

export const executeCommand = (
  command: string,
): [string, string] | [string, string[]] => {
  const commandOutput = `► ${command}`;
  const commandName = command.split(" ")[0];

  // Use the command function or default if the command is not found
  const commandDefinition = commands[commandName] || commands.default;
  const result = commandDefinition.execute(command);

  if (Array.isArray(result)) return [commandOutput, Array(...result)];

  return [commandOutput, result];
};
