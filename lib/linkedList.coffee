class Node
  constructor: (value) ->
    @value = value
    @next = null
    @prev = null

class LinkedList
  constructor: ->
    @head = null

  toString: ->
    return 'nil' if not @head?
    str = []
    node = @head
    while node?
      str.push node.value or 'nil'
      node = node.next
    str.join(', ')

  insert: (node) ->
    node.next = @head
    node.prev = null # node may be dirty
    @head.prev = node if @head?
    @head = node

  search: (value) ->
    node = @head
    while node?
      return node if node.value == value
      node = node.next
    return node or 'nil'

  remove: (node) ->
    return node.value or 'nil' if not node?
    return 'nil' if this.search(node.value) == 'nil'
    if node.next?
      node.next.prev = node.prev
    if node.prev?
      node.prev.next = node.next
    else
      @head = node.next if node.next?
    return node.value or 'nil'

module.exports = {LinkedList: LinkedList, Node: Node}
