import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

type User = {
  email: string;
  name: string;
};

type AuthContextValue = {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string) => void;
  logout: () => void;
  changeUserName: (name: string) => void;
  changePassword: (password: string) => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

  const value = useMemo(
    () => ({
      user,
      isLoggedIn: user !== null,
      login: (email: string) => {
        setUser({
          email,
          name: email.split("@")[0] || "Food Lover",
        });
      },
      logout: () => setUser(null),
      changeUserName: (name: string) => {
        if (user) {
          setUser({ ...user, name });
        }
      },
      changePassword: (password: string) => {
        if (user) {
          // In a real app, you would update the user's password here
        }
      },
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
