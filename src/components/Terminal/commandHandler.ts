import { commands } from "./commands";

interface CommandHandlers {
  [key: string]: (command: string) => string;
}

const handleHelpCommand = (): string =>
  // ? https://stackoverflow.com/questions/45812160/unexpected-comma-using-map
  `List of commands: ${Object.keys(commandHandlers)
    .map((k) => `\n - ${k}`)
    .join("")}`;

const handleClearCommand = (): string => "";

const handleUnknownCommand = (command: string): string =>
  `Unknown command: ${command}`;

const commandHandlers: CommandHandlers = {
  help: handleHelpCommand,
  clear: handleClearCommand,
  ...commands,
};

export const handleCommand = (command: string): string => {
  const sanitizedCommandInput = command.toLowerCase().trim();

  const commandOutput = `► ${command}`;

  const commandName = sanitizedCommandInput.split(" ")[0];

  const handler = commandHandlers[commandName] || handleUnknownCommand;

  const handlerResult = handler(sanitizedCommandInput);

  if (handlerResult === "") return "";

  return `${commandOutput}\n${handlerResult}`;
};
