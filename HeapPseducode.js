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
