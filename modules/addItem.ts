import { Item } from "../types";

export function addItem(
	currentTreeArray: Item[] = [],
	item: Item,
	key: string
): void {
	for (let i = 0; i < currentTreeArray.length; i++) {
		const currentItem = currentTreeArray[i];
		if (currentItem.key === key) {
			currentItem?.children?.push(item);
		} else {
			if (currentItem?.children?.length === 0) {
				continue;
			} else {
				addItem(currentItem?.children ?? [], item, key);
			}
		}
	}
}
