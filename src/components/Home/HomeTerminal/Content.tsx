import Terminal from "components/common/Terminal";

interface HomeTerminalContentProps {
  isOpen: boolean;
}

export default function HomeTerminalContent({
  isOpen,
}: HomeTerminalContentProps) {
  return (
    <div className="h-[calc(100%-40px)] overflow-y-auto overflow-x-hidden px-4 py-2">
      <Terminal isTerminalOpen={isOpen} />
    </div>
  );
}
