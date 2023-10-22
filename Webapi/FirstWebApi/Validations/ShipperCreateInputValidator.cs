using FirstWebApi.Models;
using FluentValidation;

namespace FirstWebApi.Validations;

public class ShipperCreateInputValidator : AbstractValidator<ShipperCreateInput>
{
    public ShipperCreateInputValidator()
    {
        RuleFor(r => r.CompanyName).NotEmpty().WithMessage("Şirket adı boş bırakılamaz");
        RuleFor(r => r.CompanyName).MaximumLength(150).WithMessage("Şirket adı 150 karakterden fazla olamaz");
        RuleFor(r => r.CompanyName).MinimumLength(3).WithMessage("Şirket adı 3 karakterden az olamaz");
    }
}
