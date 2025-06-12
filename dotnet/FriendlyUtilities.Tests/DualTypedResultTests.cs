using NUnit.Framework;
namespace FriendlyUtilities.Tests;

[TestFixture]
public class DualTypedResultTests
{
    private record TestData(string Value);
    private record TestError(string Message);

    public class GivenSuccessResult
    {
        [Test]
        public void ShouldBeSuccessful()
        {
            var data = new TestData("Hello");
            var result = Result<TestData, TestError>.Success(data);

            Assert.Multiple(() =>
            {
                Assert.That(result.IsSuccess, Is.True);
                Assert.That(result.Value, Is.EqualTo(data));
            });
        }

        [Test]
        public void ShouldNotAllowAccessingError()
        {
            var result = Result<TestData, TestError>.Success(new TestData("Test"));

            Assert.Throws<InvalidOperationException>(() => { _ = result.Error; });
        }

        public class SuccessAsync
        {
            [Test]
            public async Task ShouldBeSuccessful()
            {
                var data = new TestData("Async");
                var result = await Task.FromResult(Result<TestData, TestError>.Success(data));

                Assert.Multiple(() =>
                {
                    Assert.That(result.IsSuccess, Is.True);
                    Assert.That(result.Value, Is.EqualTo(data));
                });
            }

            [Test]
            public async Task ShouldNotAllowAccessingError()
            {
                var result = await Task.FromResult(Result<TestData, TestError>.Success(new TestData("Test")));

                Assert.Throws<InvalidOperationException>(() => { _ = result.Error; });
            }
        }
    }

    public class GivenFailureResult
    {
        [Test]
        public void ShouldBeAFailure()
        {
            var error = new TestError("Oops");
            var result = Result<TestData, TestError>.Failure(error);

            Assert.Multiple(() =>
            {
                Assert.That(result.IsSuccess, Is.False);
                Assert.That(result.Error, Is.EqualTo(error));
            });
        }

        [Test]
        public void ShouldNotAllowAccessingData()
        {
            var result = Result<TestData, TestError>.Failure(new TestError("Error"));

            Assert.Throws<InvalidOperationException>(() => { _ = result.Value; });
        }

        public class FailureAsync
        {
            [Test]
            public async Task FailureResult_Async_ShouldBeFailure()
            {
                var error = new TestError("Async Error");
                var result = await Task.FromResult(Result<TestData, TestError>.Failure(error));

                Assert.Multiple(() =>
                {
                    Assert.That(result.IsSuccess, Is.False);
                    Assert.That(result.Error, Is.EqualTo(error));
                });
            }

            [Test]
            public async Task FailureResult_Async_ShouldNotAllowAccessingData()
            {
                var result = await Task.FromResult(Result<TestData, TestError>.Failure(new TestError("Fail")));

                Assert.Throws<InvalidOperationException>(() => { _ = result.Value; });
            }
        }
    }

    [Test]
    public void SuccessResult_AndFailureResult_ShouldNotBeEqual()
    {
        var data = new TestData("Success");
        var error = new TestError("Failure");
        var success = Result<TestData, TestError>.Success(data);
        var failure = Result<TestData, TestError>.Failure(error);

        Assert.That(success, Is.Not.EqualTo(failure));
    }
}
