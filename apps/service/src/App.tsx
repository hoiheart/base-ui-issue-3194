import { Select } from "@repo/base";

export function App() {
  return (
    <div>
      <h1>base-ui issue #3194</h1>
      <Select.Root>
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit..." />
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner>
            <Select.Popup>
              <Select.Item value="apple">
                <Select.ItemText>Apple</Select.ItemText>
              </Select.Item>
              <Select.Item value="banana">
                <Select.ItemText>Banana</Select.ItemText>
              </Select.Item>
              <Select.Item value="orange">
                <Select.ItemText>Orange</Select.ItemText>
              </Select.Item>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
