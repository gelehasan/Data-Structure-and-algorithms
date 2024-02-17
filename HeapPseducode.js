function EXTRACT-MAX(heap)
    max = heap[0]
    heap[0] = heap[heap_size-1]
    heap_size = heap_size - 1
    MAX-HEAPIFY(heap, 0)
    return max
end function



function MAX-HEAPIFY(heap, root)
    largest = INDEX_LARGEST_NODE(root)
    if (largest != root)
        SWAP(heap[largest], heap[root])
        MAX-HEAPIFY(heap, largest)
end function



// The algorthim

function extractMax(heap) {
    if (heap.length === 0) {
        throw new Error('Heap is empty');
    }

    let max = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.length = heap.length - 1;
    maxHeapify(heap, 0);
    return max;
}



function maxHeapify(heap, index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;

    if (left < heap.length && heap[left] > heap[largest]) {
        largest = left;
    }

    if (right < heap.length && heap[right] > heap[largest]) {
        largest = right;
    }

    if (largest !== index) {
        swap(heap, index, largest);
        maxHeapify(heap, largest);
    }
}

function swap(heap, i, j) {
    let temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
}
