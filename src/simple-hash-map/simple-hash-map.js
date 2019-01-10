let SimpleHashMap = {

    build : function(numSlots, hashFunction) {
        let hashMap = {};
        let hashContainer = [];
        for (let i = 0; i < numSlots; i++) {
            hashContainer[i] = [];
        }

        let getSlotIndexFor = function(newElt) {
            let hash = hashFunction(newElt);
            hash = hash % numSlots;
            while (hash < 0) {
                hash += numSlots;
            }
            return hash % numSlots;
        };

        hashMap.add = function(key, val) {
            let item = hashMap.get(key);
            if (item != null) {
                item.value = val;
            } else {
                let slotIndex = getSlotIndexFor(key);

                hashContainer[slotIndex].push({
                    key : key,
                    value : val
                });
            }
        };

        hashMap.get = function(key) {
            let slotIndex = getSlotIndexFor(key);
            if (hashContainer[slotIndex] == undefined) {
                return null;
            } else {
                let arr = hashContainer[slotIndex];
                for (let i = 0; i < arr.length; i ++) {
                    if (arr[i].key == key) {
                        return arr[i];
                    }
                }
                return null;
            }
        };

        hashMap.contains = function(key) {
            return (hashMap.get(key) !== null);
        };

        hashMap.getValue = function(key) {
            let slotIndex = getSlotIndexFor(key);
            if (hashContainer[slotIndex] == undefined) {
                return false;
            } else {
                let arr = hashContainer[slotIndex];
                for (let i = 0; i < arr.length; i ++) {
                    if (arr[i].key == key) {
                        return arr[i].value;
                    }
                }
                return false;
            }
        };

        hashMap.remove = function(key) {
            let slotIndex = getSlotIndexFor(key);
            if (hashContainer[slotIndex] == undefined) {
                return true;
            } else {
                let arr = hashContainer[slotIndex];
                let newArray = [];
                for (let i = 0; i < arr.length; i ++) {
                    if (arr[i].key != key) {
                        newArray.push(arr[i]);
                    }
                }
                hashContainer[slotIndex] = newArray;
            }
        };

        hashMap.toList = function() {
            let list = [];
            for (let i = 0; i < hashContainer.length; i++) {
                let slot = hashContainer[i];
                for (let j = 0; j < slot.length; j++) {
                    list.push(slot[j]);
                }
            }
            return list;
        };

        return hashMap;
    }
};

export default SimpleHashMap;