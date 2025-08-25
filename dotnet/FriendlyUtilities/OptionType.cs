using System.Collections;

namespace FriendlyUtilities;

public abstract record OptionType;

public record Some<T>(T Value) : OptionType where T : notnull;
public record None<T> : OptionType where T : notnull;

public static class OptionalExtensions
{
    public static TResult Match<T, TResult>(this OptionType optionType, Func<T, TResult> some, Func<TResult> none) where T : notnull =>
        optionType switch
        {
            Some<T> someValue => some(someValue.Value),
            None<T> => none(),
            _ => throw new InvalidOperationException("Unexpected option type.")
        };
}

public static class Optional
{
    public static OptionType Some<T>(T value) where T : notnull => new Some<T>(value);
}

public class Option<T> : IEquatable<Option<T>>, IStructuralEquatable, IComparable<Option<T>>, IComparable, IStructuralComparable
    where T : notnull
{
    private readonly T? _value;

    public static Option<T> Some(T value) => new(value);
    public static Option<T> None => new();

    public bool IsSome { get; }
    public bool IsNone => !IsSome;

    private Option(T value)
    {
        _value = value;
        IsSome = true;
    }

    private Option()
    {
        IsSome = false;
    }

    public bool Equals(OptionType? other)
    {
        throw new NotImplementedException();
    }

    public bool Equals(Option<T>? other)
    {
        throw new NotImplementedException();
    }

    public int CompareTo(Option<T>? other)
    {
        throw new NotImplementedException();
    }

    public override bool Equals(object? obj) =>
        obj is OptionType other && Equals(other);

    public int CompareTo(object? other, IComparer comparer)
    {
        throw new NotImplementedException();
    }

    public int CompareTo(object? obj)
    {
        throw new NotImplementedException();
    }

    public int CompareTo(OptionType? other) => CompareTo(other, Comparer<T>.Default);

    public bool Equals(object? other, IEqualityComparer comparer)
    {
        throw new NotImplementedException();
    }

    public int GetHashCode(IEqualityComparer comparer)
    {
        throw new NotImplementedException();
    }

    public override int GetHashCode() =>
        GetHashCode(EqualityComparer<T>.Default);

    public override string ToString() => IsSome ? $"Some({_value})" : "None";

    public static bool operator ==(Option<T> a, Option<T> b) =>
        a.Equals(b);

    public static bool operator !=(Option<T> a, Option<T> b) =>
        !(a == b);

    public static bool operator <(Option<T> a, Option<T> b) =>
        a.CompareTo(b) < 0;

    public static bool operator >(Option<T> a, Option<T> b) =>
        a.CompareTo(b) > 0;

    public static bool operator <=(Option<T> a, Option<T> b) =>
        a.CompareTo(b) <= 0;

    public static bool operator >=(Option<T> a, Option<T> b) =>
        a.CompareTo(b) >= 0;
}
