public class QuickUnionUF {
    private int[] roots;

    public QuickUnionUF(int N) {
        roots = new int[N];
        for (int i = 0; i < roots.length; i++) {
            roots[i] = i;
        }
    }

    public int findRoot(int i) {
        int root = i;
        while (root != roots[root]) {
            root = roots[root];
        }
        // 路径压缩
        while (i != roots[i]) {
            int tmp = roots[i];
            roots[i] = root;
            i = tmp;
        }
        return root;
    }

    public boolean connected(int p, int q) {
        return findRoot(p) == findRoot(q);
    }

    public void union (int p, int q) {
        int proot = findRoot(p);
        int qroot = findRoot(q);
        roots[proot] = qroot;
    }
}
// 并查集：合并的时候把深度（rank）较低的子集merge到深度较高的子集去（优化）
// 路径压缩：一层深度（优化）-> 并查集主要是关系
