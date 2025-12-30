import sys

def analyze_file(filename):
    try:
        with open(filename, "r") as file:
            text = file.read()

        lines = text.splitlines()
        words = text.split()
        chars = len(text)

        print("File Analysis Report")
        print("--------------------")
        print(f"Lines: {len(lines)}")
        print(f"Words: {len(words)}")
        print(f"Characters: {chars}")

    except FileNotFoundError:
        print("Error: File not found.")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: py analyzer.py <filename>")
    else:
        analyze_file(sys.argv[1])
