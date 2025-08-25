using NUnit.Framework;

namespace FriendlyUtilities.Tests;

[TestFixture]
public class OptionsTests
{
    private static readonly Random Random = new();

    public class GivenAnOption
    {
        [Test]
        public void WithoutAValueType_ShouldHaveNoValue()
        {
            var option = Option<int>.None;

            Assert.Multiple(() =>
            {
                Assert.That(option.IsSome, Is.False);
                Assert.That(option.IsNone, Is.True);
            });
        }

        [Test]
        public void WithAValueType_ShouldHaveValue()
        {
            var option = Option<int>.Some(Random.Next());
            var o = Optional.Some(Random.Next());


            Assert.Multiple(() =>
            {
                Assert.That(option.IsSome, Is.True);
                Assert.That(option.IsNone, Is.False);
            });
        }

        public class Comparisons
        {
            [Test]
            public void WithTheSameValue_ShouldEqual()
            {
                var value = Random.Next();
                var option1 = Option<int>.Some(value);
                var option2 = Option<int>.Some(value);

                Assert.Multiple(() =>
                {
                    Assert.That(option1, Is.EqualTo(option2));
                });
            }
        }
    }
}
