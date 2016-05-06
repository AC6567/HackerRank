/* Day 15: Linked List

HackerRank 30 Days of Code by Perrin Clark
BlackGuyCoding@gmail.com
*/
//this test is passing locally but now on HackerRank//

this.insert=function(head,data){
        var node = new Node(data);
        if (head == null){
            head = node
        }
        else{
            var temp = head;
            while (temp.next != null)
                temp = temp.next
            temp.next = node;
        }
        return head;
    };
