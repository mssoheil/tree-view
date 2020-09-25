import { Item } from "../types";

export function findItem(
	currentTreeArray: Item[] = [],
	key: string
): Item | undefined {
	let foundItem;
	for (let i = 0; i < currentTreeArray.length; i++) {
		const currentItem = currentTreeArray[i];
		if (currentItem.key === key) {
			foundItem = currentItem;
			break;
		} else {
			if (currentItem?.children?.length === 0) {
				continue;
			} else {
				return findItem(currentItem?.children ?? [], key);
			}
		}
	}
	return foundItem;
}
