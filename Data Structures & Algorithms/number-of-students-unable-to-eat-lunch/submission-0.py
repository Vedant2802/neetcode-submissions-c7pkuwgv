class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        q = students[:]   # copy list
        i = 0
        rotations = 0

        while q and rotations < len(q):
            if q[0] == sandwiches[i]:
                q.pop(0)        # remove front
                i += 1
                rotations = 0   # reset
            else:
                q.append(q.pop(0))  # move front to back
                rotations += 1

        return len(q)